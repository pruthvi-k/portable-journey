# Context File

## What changes are done?

- Created separate component "PeopleCard" as it is using very few properties
- I grouped the other two media types together since they shared almost identical properties and structure.

## What are we looking for?

You are welcome to keep it brief but please jot down a few notes on:

- Why you have chosen a library?
---I haven't added any library yet, but I can implement commit hooks to ensure code quality validation before committing and restrict any commits that don't meet the required standards.
- What other libraries you have considered (if any)
--- Axios for http calls
--- React Query or SWR for data-fetching which provides an elegant and powerful way to manage and cache data in application

## What Improvements in code can be done?
- pull master data call out of loop - Fetch Genres
- common card component for tv and movie and just pull data formatting to parent and format as accepted by common card component
- export interfaces and use those in component to define props types

### Approach to solution

### Testing
Playright and Jest to be added

### Folder Structure

- src
---Page
---Components
--- --- Search
--- --- --- index, test file
--- --- --- SearchResult
--- --- --- SearchItem
--- --- --- TotalSearchResult
--- --- Cards
--- --- --- PeopleCard
--- --- Pagination
--- --- --- ClientPaging
--- --- --- ServerPaging
---util