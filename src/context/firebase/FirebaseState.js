import React, { useReducer } from "react";
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { REMOVE_NOTE, SHOW_LOADER, ADD_NOTE, FETCH_NOTES } from "../types";
// const { Product} = require('../db/models');

const url = 'https://reactstudy2-default-rtdb.europe-west1.firebasedatabase.app'

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  }
  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const fetchNotes = async () => {
    showLoader()
    const res = await axios.get(`${url}/notes.json`)

    // console.log('fetchNotes', res.data)
    // console.log(Object.keys(res.data))
    const payload = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    })
    dispatch({
      type: FETCH_NOTES,
      payload
    })
  }

  const addNote = async title => {
    const note = {
      title, date: new Date().toJSON()
    }
    try {
      const res = await axios.post(`${url}/notes.json`, note)
      console.log('addNote', res.data)

      const payload = {
        ...note,
        id: res.data.name
      }


      dispatch({
        type: ADD_NOTE,
        payload
      })

    } catch (error) {
      throw new Error(error.massage)
    }

  }

  const removeNote = async id => {
    await axios.delete(`${url}/notes/${id}.json`)

    dispatch({
      type: REMOVE_NOTE,
      payload: id
    })
  }

  return (
    <FirebaseContext.Provider value={{
      showLoader, addNote, removeNote, fetchNotes,
      loading: state.loading,
      notes: state.notes
    }}>
      {children}
    </FirebaseContext.Provider>

  )
}
