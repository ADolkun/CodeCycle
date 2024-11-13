# Changelog

All notable changes to CodeCycle will be documented in this file.

## [0.9.9.6] - 2024-11-12

### Changed

- Fixed table container height to maintain consistent pagination position
- Improved delay time calculation logic to show only days instead of hours
- Removed unnecessary scrollbar from table container

### Fixed

- UI consistency issue where pagination controls would move up with fewer items
- Table layout maintains consistent height regardless of content amount

## [0.9.9.5] - 2024-11-11

### Changed

- UI makeover & UX improvements
  - Remade the entire UI to a more modern and light version
  - Improved table layout with optimized column widths
  - Enhanced problem name display with hover effect
  - Adjusted footer layout for better spacing
- Reorganized CSS code structure

## [0.9.9.1] - 2024-10-28

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

## [0.9.9] - 2024-10-26

### Added

- Support for tracking submissions via Ctrl+Enter (Windows/Linux) or Cmd+Enter (MacOS)
- Cloud sync functionality for sharing progress across devices
- Paging support for better organization of problem lists
- Support for new LeetCode UI version

### Changed

- Refactored with webpack for better scalability
- Updated UI with modern design elements
