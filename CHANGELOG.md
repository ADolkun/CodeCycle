# Changelog

All notable changes to PMCA will be documented in this file.

## [0.9.9.1] - 2024-03-28

### Added

- Import/Export functionality for progress data
  - Added Export Progress button to download current progress as JSON
  - Added Import Progress button to load progress from JSON file
  - Added validation for imported data
  - Added confirmation dialog before import to prevent accidental data loss
- Fixed review time calculation to use calendar days instead of exact time
  - Questions now appear in Review Due section at the start of the review day
  - More intuitive review scheduling

### Changed

- Updated UI with new import/export buttons in options page
- Improved error handling and user feedback for import/export operations

## [0.9.9] - 2024-03-27

### Added

- Support for tracking submissions via Ctrl+Enter (Windows/Linux) or Cmd+Enter (MacOS)
- Cloud sync functionality for sharing progress across devices
- Paging support for better organization of problem lists
- Support for new LeetCode UI version

### Changed

- Refactored with webpack for better scalability
- Updated UI with modern design elements
