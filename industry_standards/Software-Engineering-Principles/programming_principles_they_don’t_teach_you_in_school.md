# Programming Principles They Don't Teach You in School

## KISS Principle

**Keep It Simple, Stupid!**

- **Idea:** Code should be simple, easy to understand.
- **Why:** Facilitates collaboration, debugging, and maintenance.
- **Example:** Simplify code, use meaningful abstractions.

## DRY Principle

**Don’t Repeat Yourself**

- **Idea:** Avoid duplicating code, use functions or abstractions.
- **Why:** Reduces redundancy, easier maintenance.
- **Example:** Create functions for repeated code.

## SOLID Principles

### Single Responsibility

**A class should have one, and only one, reason to change.**

- **Idea:** Each class/function should do one thing.
- **Why:** Improves maintainability, reduces bugs.
- **Example:** Separate concerns for better design.

### Open/Closed

**Software entities should be open for extension, but closed for modification.**

- **Idea:** Extend behavior without modifying existing code.
- **Why:** Encourages flexibility, reduces bugs.
- **Example:** Use interfaces and inheritance.

### Liskov Substitution

**If S is a subtype of T, then any properties provable by T must also be provable by S.**

- **Idea:** Subtypes should be interchangeable.
- **Why:** Ensures consistency, avoids breaking code.
- **Example:** Follow the "is-a" relationship.

### Interface Segregation

**Interfaces should not force their clients to depend on methods they do not use.**

- **Idea:** Clients should not be forced to implement unnecessary methods.
- **Why:** Reduces unnecessary dependencies.
- **Example:** Design focused interfaces.

### Dependency Inversion

**High-level modules should not depend on low-level modules; both should depend on abstractions.**

- **Idea:** Depend on abstractions, not concrete implementations.
- **Why:** Allows flexibility, facilitates testing.
- **Example:** Use interfaces to define dependencies.

These principles, known as KISS, DRY, and SOLID, guide software development for maintainability, flexibility, and readability.
