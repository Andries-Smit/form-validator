# Form Validation Nanoflow

Run a validation on a form before a file is uploaded!

## Working

By default, a form with a file upload, the upload is triggered when an action button is clicked. Sometimes you what to have more control before the submission.

The widget can trigger a nanoflow as a validation before the upload and prevent the form submission when needed.
It triggers when the form is submitted by action for example, save, call nanoflow, call microflow. The nanoflow has access the context properties, the current file document uses the Name and Size, and HasContents property, in addition the new selected file information can be set trough this widget too.

## Usage

 - Optional: Add to the file entity the attribute for: Selected name, Selected file size, Selected has contents
 - Place the widget below your file input form
 - Select a nanoflow for validation
 - Select if "selected" attributes
 - The nanoflow returns true, to continue, return turn false to stop the form submission
