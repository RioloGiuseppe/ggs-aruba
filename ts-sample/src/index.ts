import { Demo } from "./demo";

const demo = new Demo();

demo.sample = 5;
demo.increment();

demo.print();
console.log(`Val: ${demo.sample}`);
