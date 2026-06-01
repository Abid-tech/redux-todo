import { useState } from 'react'
import './todo.css'

function Todo() {

  return (
    <>
       <section id='top'>
        <div className='top-txt'>
            <h4>Daily Routine Manager</h4>
        </div>
       </section>

        
       <div className="container">
            <section id='dashboard'>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="dash-content">
                                    <h4>Total Task</h4>
                                    <h5>15</h5>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dash-content">
                                    <h4>Completed Task</h4>
                                    <h5>8</h5>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dash-content">
                                    <h4>pending Task</h4>
                                    <h5>7</h5>
                                </div>
                            </div>
                        </div>
            </section>
       </div>
    </>
  )
} 

export default Todo
