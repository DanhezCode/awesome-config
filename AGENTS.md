# AI Instructions

Before working on a task:

1. Read [CONTEXT.md](docs/ai/CONTEXT.md) for project context.
2. Read [COMMANDS.md](docs/ai/COMMANDS.md) for available commands.
3. Read and follow [WORKFLOW.md](docs/ai/WORKFLOW.md) for the development process.

## Documentation

Consult additional documentation when relevant:

- [Architecture](docs/ai/ARCHITECTURE.md) — structural decisions, boundaries, and constraints.
- [Conventions](docs/ai/CONVENTIONS.md) — project-specific implementation conventions.
- [Testing](docs/ai/TESTING.md) — testing-specific requirements and constraints.
- [Domain documentation](docs/ai/domains/*) — domain-specific knowledge.

Do not read unrelated documentation.

## Global Rules

These rules apply to every task:

- Do not make assumptions when information can be verified.
- Follow project documentation over generic conventions.
- Preserve existing architecture and established patterns.
- Prefer existing code, utilities, dependencies, and abstractions when appropriate.
- Do not introduce dependencies or abstractions without justification.
- Keep changes focused and avoid unrelated modifications.
- Do not expose or commit secrets, credentials, or sensitive information.
- Update relevant documentation when a change makes it inaccurate.
- When project documentation conflicts with itself, resolve the conflict using the most specific and authoritative source.
