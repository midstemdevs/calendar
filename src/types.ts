import { CSSProperties, MouseEvent, ReactNode } from 'react'
import { Duration } from 'date-fns'

import { IconSizes, Views } from './constants'

export type ReactChildrenT = {
  children: ReactNode
}

export type CommonStylesT = {
  sx?: CSSProperties
  className?: string
}

export type ValueOF<T extends string> = `${T}`

export type ButtonStylesT = 'primary' | 'secondary'

export type IconsT = {
  sx?: CSSProperties
  color?: string
  size?: ValueOF<IconSizes>
}

export type WeekStartsOnType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined

export type CalendarEventType = {
  id: string
  title: string
  date: string
  start: string
  end: string
  overlapping?: number
  type?: string
  position?: string | number
  width?: string
  color?: string
  textColor?: string
  opacity?: number
}

export type WeekRowsType = {
  time: string
  cells: WeekCellType[][]
}

export type DayRowsType = {
  time: string
  cells: DayCellType[][]
}

type CellT = CalendarEventType & {
  duration?: Duration
}

export type WeekCellType = CellT

export type DayCellType = CellT

export type EventComponentProps = {
  event: CalendarEventType
  isSelected: boolean
}

export type HandleClicKOnCellT = {
  event: MouseEvent<HTMLDivElement>
  time: string
  day: Date
  onClick: (time: string, day: Date) => void
}

export type UserEvents<EventT> = {
  onClickEvent: (event: EventT) => void
  onClickCell: (time: string, day: Date) => void
}

export type ConfigT = {
  maxWidth: number
  mode: ViewsT
}

export type ViewsT = ValueOF<Views>
