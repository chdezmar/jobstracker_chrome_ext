# Jobs Tracker

Chrome extension, part of a simple Rails app to help organizing a job search, so you can get rid of excel spreadsheets. It makes adding jobs to your account easier, straight from the browser.

- [Main rails app](https://github.com/chdezmar/jobstracker)
- [Chrome extension](https://github.com/chdezmar/jobstracker_chrome_ext)

# Tech used
  - Ruby on Rails
  - [DataTables](https://datatables.net/)
  - PostgreSQL
  - Rspec
  - Capybara
  - Chrome extension (Javascript and AJAX)

# Set up

Follow instructions on the [main rails app](https://github.com/chdezmar/jobstracker/blob/chrome-extension/README.md#set-up).

1. Clone this repo locally and change <strong>popup.js</strong>:

  ```
  $.ajax({
    method: "POST",
    url: "https://jobstracker.herokuapp.com/jobs/",
  ```
  for:

  ```
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/jobs/",
  ```
2. On Chrome, go to the following path:
```
chrome://extensions/
```
3. Click Load unpacked extension...
4. Select the folder.
5. Start adding jobs!
