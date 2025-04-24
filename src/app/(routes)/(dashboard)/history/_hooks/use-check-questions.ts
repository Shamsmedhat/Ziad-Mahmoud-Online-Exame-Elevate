import { AnswerFields } from "@/lib/schemes/exam.schema";
import { useMutation } from "@tanstack/react-query";
import { checkQuestionsAction } from "../_actions/exam.action";

export default function useCheckQuestions() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: AnswerFields) => {
      const payload = await checkQuestionsAction(fields);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { isPending, error, checkQuestions: mutate };
}
