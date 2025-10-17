import {boolean, index, pgTable, text, timestamp, uuid} from "drizzle-orm/pg-core";


const createdAt = timestamp("createdAt").notNull().defaultNow()
const updatedAt = timestamp("updatedAt")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
export const ProjectTable = pgTable("projects",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        name: text("name").notNull(),
        description: text("description").notNull(),
        emoji: text("emoji").notNull(),
        clerkUserId: text("clerkUserId").notNull(),
        createdAt: createdAt,
        updatedAt: updatedAt,

    },
    table => ([index("clerk_user_idx").on(table.clerkUserId)])
)

export const taskTable = pgTable("tasks", {
        id: uuid('id').primaryKey().defaultRandom(),
        projectId: uuid('projectId').notNull().references(() => ProjectTable.id, { onDelete: 'cascade' }),
        name: text('name').notNull(),
        description: text('description').notNull(),
        emoji: text('emoji').notNull(),
        completed: boolean('completed').notNull().default(false),
        createdAt: createdAt,
        updatedAt: updatedAt,
    },
    (taskTable) => [index("project_id_idx").on(taskTable.projectId)]
)

export const subTaskTable = pgTable("subtasks", {
        id: uuid('id').primaryKey().defaultRandom(),
        taskId: uuid('taskId').notNull().references(() => taskTable.id, { onDelete: 'cascade' }),
        name: text('name').notNull(),
        description: text('description').notNull(),
        completed: boolean('completed').notNull().default(false),
        emoji: text('emoji').notNull(),
        createdAt: createdAt,
        updatedAt: updatedAt,
},
    (subTaskTable) => [index("task_id_idx").on(subTaskTable.taskId)]
)