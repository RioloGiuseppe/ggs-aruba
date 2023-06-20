import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.scss']
})
export class IssueReportComponent implements OnInit {

  issueForm: FormGroup | undefined;
  @Output() formClose = new EventEmitter();
  suggestions: Issue[] = []

  constructor(private builder: FormBuilder, private issuesServices: IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      type: ['', Validators.required],
    });

    this.issueForm.controls['title'].valueChanges.subscribe((text: string) => {
      this.suggestions = this.issuesServices.getSuggestions(text)
    })

  }

  addIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }
    this.issuesServices.createIssue(this.issueForm?.value)
    this.formClose.emit()
  }


}
