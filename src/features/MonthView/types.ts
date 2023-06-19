import { CalendarEventType } from 'src/types'

export type MonthViewProps = {
  events: CalendarEventType[]
  selectDateHandler: (date: Date) => void
}
