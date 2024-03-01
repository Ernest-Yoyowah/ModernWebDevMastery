# Compilation Process of JavaScript Code

## From Developer's Editor to JS Engine

After a program leaves a developer's editor, it undergoes several transformations before being executed by a JavaScript (JS) engine:

1. **Transpilation by Babel:**

   - Description: Babel is a popular tool used to convert modern JavaScript code (written using the latest language features) into backward-compatible versions that can run on older browsers or environments. This process is known as transpilation.
   - Output: Transpiled JavaScript code.

2. **Packaging by Webpack (and Other Build Processes):**
   - Description: Webpack is a module bundler commonly used in modern JavaScript development. It takes the transpiled code from Babel, along with other project files (stylesheets, images, etc.), and bundles them into a single output file or multiple files, ready for deployment.
   - Output: Bundled JavaScript files along with other assets.

## Processing by JS Engine

Once the bundled JavaScript code is delivered to a JS engine, the following steps occur:

3. **Parsing to AST (Abstract Syntax Tree):**

   - Description: The JS engine parses the bundled code into an Abstract Syntax Tree (AST). The AST represents the syntactic structure of the code and is used for further analysis and optimization.
   - Output: AST representation of the code.

4. **Conversion to Intermediate Representation (IR):**

   - Description: The AST is converted to a binary intermediate representation (IR), which is a kind of bytecode. This IR serves as a more efficient representation of the code for subsequent optimization and execution.
   - Output: Binary Intermediate Representation (IR) of the code.

5. **Optimization by JIT Compiler:**

   - Description: The IR undergoes optimization by the JavaScript engine's Just-In-Time (JIT) compiler. This compiler applies various optimization techniques to improve the performance of the code, such as inlining functions, loop unrolling, and dead code elimination.
   - Output: Optimized IR ready for execution.

6. **Execution by JavaScript Virtual Machine (VM):**
   - Description: Finally, the optimized IR is executed by the JavaScript VM. The VM reads the code, allocates memory, and executes the instructions specified in the IR. This process results in the execution of the JavaScript program, producing the desired output.
   - Output: Result of program execution.

## Processing by JS Engine

![JS Engine](/JIT-Compilation.png)
