import './styles.css'

import MonthHeader from '../MonthHeader'
import EventsList from '../EventsList'
import { Devices } from '../../constants'

import { MonthViewProps } from './types'
import { getDays, getEvents } from './helpers'
import { MonthSlots } from './constants'

const MonthView = ({
  selectDateHandler,
  onClickEvent,
  onClickCell,
  renderRows,
  selectedDate,
  eventModal,
  newEventModal,
  deviceMode,
  isEventsList,
}: MonthViewProps): JSX.Element => {
  const Month = MonthSlots[deviceMode]

  return isEventsList ? (
    <EventsList days={getDays(renderRows)} events={getEvents(renderRows)} />
  ) : (
    <>
      {deviceMode === Devices.MOBILE && <MonthHeader />}

      <Month
        eventModal={eventModal}
        newEventModal={newEventModal}
        renderRows={renderRows}
        onSelectDate={selectDateHandler}
        onClickEvent={onClickEvent}
        onClickCell={onClickCell}
        selectedDate={selectedDate}
      />
    </>
  )
}

export default MonthView
