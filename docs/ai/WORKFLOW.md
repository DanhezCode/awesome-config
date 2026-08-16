# Development Workflow

## 1. Understand

Before making changes:

- Read the project context.
- Understand the project structure.
- Identify relevant documentation.
- Understand the task and its expected outcome.

Do not modify code while the requirements are still unclear.

## 2. Analyze Requirements

Separate the task into:

- Functional requirements.
- Technical requirements.
- Constraints.
- Acceptance criteria.

Identify what the code should do, who consumes it, and what behavior must remain unchanged.

## 3. Identify Impact

Determine:

- Affected files.
- Affected modules.
- Dependencies.
- Side effects.
- Potential regressions.
- External systems affected.
- Tests that may need changes.

## 4. Research

Before implementing, search for:

- Existing implementations.
- Reusable functions or utilities.
- Existing patterns.
- Installed dependencies.
- Relevant skills.
- Project documentation.
- Related domain documentation.

Prefer adapting existing solutions over creating new ones.

## 5. Follow References

When documentation, skills, or source files reference other resources:

1. Determine whether the reference is relevant.
2. Read it if necessary.
3. Continue following important references until the relevant context is understood.

Do not blindly read unrelated documentation.

## 6. Plan

Create a step-by-step implementation plan.

The plan should include:

- Structural changes.
- Files to modify.
- Files to create.
- Important implementation details.
- Reuse opportunities.
- Validation strategy.

## 7. Re-evaluate

Before implementation, verify that:

- The plan satisfies every requirement.
- The proposed architecture matches the project.
- Existing functionality will remain intact.
- Existing code or dependencies can be reused.

Modify the plan when new information requires it.

## 8. Implement

Implement incrementally.

During implementation:

- Keep changes focused.
- Follow project conventions.
- Reuse existing code.
- Avoid unnecessary abstractions.
- Avoid unrelated refactoring.
- Preserve existing behavior unless the task requires changing it.

## 9. Validate

Run the relevant:

- Type checker.
- Formatter.
- Linter.
- Tests.
- Build.

Fix problems before considering the task complete.

## 10. Review

Before finishing:

- Verify every requirement.
- Review the complete diff.
- Check for unintended changes.
- Check for duplicated logic.
- Check for unnecessary dependencies.
- Check for missing tests.
- Check for documentation that should be updated.

## Definition of Done

A task is complete only when:

- All requirements are implemented.
- Relevant validation passes.
- No known regressions were introduced.
- The final implementation follows project conventions.
- The change is limited to what the task requires.
