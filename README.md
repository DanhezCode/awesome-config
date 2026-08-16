# Awesome TypeScript Template

An **opinionated TypeScript template** with a modern, ready-to-use development setup.

It provides a carefully selected foundation for TypeScript projects, with
strict type checking, code quality, formatting, testing, and automated
validation already configured.

## Philosophy

This template follows a simple philosophy:

> **Prefer simple, modern, maintainable, and efficient solutions over
> unnecessary complexity.**

The configuration is intentionally opinionated. It provides sensible defaults
based on established practices instead of trying to support every possible
workflow.

The goal is to start with a solid foundation and spend time building the
project, not configuring its tooling.

For a more generic or less opinionated TypeScript template, consider
[Vite+](https://viteplus.dev/).

## Tooling

### TypeScript

Strict and modern TypeScript configuration focused on type safety,
maintainability, and modern module resolution.

### Oxlint

A fast linter with rules covering correctness, TypeScript, imports,
performance, and common code-quality issues.

### Oxfmt

A fast formatter that keeps the codebase consistent without relying on
manual formatting decisions.

### Vitest

A modern and fast test runner with coverage support.

### Lefthook

Runs automated checks through Git hooks so formatting, linting, and other
validation can happen before changes reach the repository.

### Commitlint

Enforces consistent commit messages using conventional commits.

### CSpell

Catches spelling mistakes while supporting project-specific terminology.

## Workflow

The tooling is designed around a simple flow:

```text
Write code
   ↓
Format
   ↓
Lint
   ↓
Test
   ↓
Commit hooks
   ↓
Validated code
```

The same checks can also be run manually.

## Commands

```bash
bun check       # Run formatting, linting and spell checking
bun fix         # Apply formatting and lint fixes

bun fmt         # Check formatting
bun fmt:fix     # Format files

bun lint        # Run linting
bun lint:fix    # Apply lint fixes

bun tests       # Run tests
bun tests:watch # Run tests in watch mode
bun tests:cov   # Run tests with coverage
```

## Why these tools?

The stack is intentionally small:

- **Bun** — fast runtime and package manager.
- **TypeScript** — strong static typing.
- **Oxlint** — fast and comprehensive linting.
- **Oxfmt** — fast, consistent formatting.
- **Vitest** — fast modern testing with coverage.
- **Lefthook** — lightweight and fast Git hooks.
- **Commitlint** — consistent commit history.
- **CSpell** — automated spelling checks.

Every tool is selected to provide a useful part of the development workflow
without introducing unnecessary complexity.
