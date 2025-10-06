# Database Schema Notes

## Main Objects:

### Project
columns: uuid, name, tasks, clerkUserId, createdDate, completedDate, updatedDate

### Task
columns: uuid, emoji, name, description, project_id, completed, subtasks, createdDate, completedDate, updatedDate

### Subtask
columns: uuid, name, description, task_id, completed, createdDate, completedDate, updatedDate
