import { z } from "zod";

export const ExamSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string(),
      correct: z.string(),
    })
  ),
  time: z.number(),
});
export type AnswerFields = z.infer<typeof ExamSchema>;
