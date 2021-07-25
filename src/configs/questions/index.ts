import { CourseType, ModuleType, QuestionType } from '@store/quiz/slice'

import klerosModule01MC from './kleros/01/mc.json'
import klerosModule01TF from './kleros/01/tf.json'

export const questions: Record<CourseType, Record<ModuleType, QuestionType[]>> = {
  dev: {
    '01': [],
    '02': [],
    '03': [],
  },
  business: {
    '01': [],
    '02': [],
    '03': [],
  },
  kleros: {
    '01': [...klerosModule01TF, ...klerosModule01MC],
    '02': [],
    '03': [],
  },
}
