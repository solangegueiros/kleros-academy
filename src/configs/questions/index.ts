import { CourseType, ModuleType, QuestionType } from '@store/quiz/slice'

import klerosModule01MC from './kleros/01/mc.json'
import klerosModule01TF from './kleros/01/tf.json'

export const questions: Record<CourseType, Record<ModuleType, QuestionType[]>> = {
  kleros: {
    '01': [...klerosModule01TF, ...klerosModule01MC],
  },
}
