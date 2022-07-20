import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component='ul' className='list-group'>
    {notes.map(note => (
      <CSSTransition
      key={note.id}
      classNames={'note'}
      timeout={800}
      >
      <li className='note' >
        <div>
          <strong>{note.title}</strong>
          <small className='date'>{note.date}</small>
        </div>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => onRemove(note.id)}
        >
          &times;
        </button>
      </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
)

