import React from 'react'
import './Skills.css'
import html from '../../Images/logos/html.png'
import css from '../../Images/logos/css.png'
import js from '../../Images/logos/js.png'
import react from '../../Images/logos/react.png'
import mongo from '../../Images/logos/mongo.svg'
import express from '../../Images/logos/express.svg'
import node from '../../Images/logos/node.png'
import python from '../../Images/logos/python.png'
import java from '../../Images/logos/java.png'
import springboot from '../../Images/logos/springboot.svg'
import sql from '../../Images/logos/mysql.png'


export const Skills = () => {
    return (
        <div>
            

            <table className='table-skills'>
                <tr>
                    <th>Web Development</th>
                    <td><img src={html} alt="html" />
                        <img src={css} alt="css" />
                        <img src={js} alt="java script" /></td>
                </tr>
                <tr>
                    <th>Libraries</th>
                    <td>
                        <img src={express} alt="express" />
                        <img src={react} alt="react" />
                        <img src={node} alt="node" />
                        <img src={springboot} alt="springboot" />
                        </td>
                </tr>
                <tr>
                    <th>Programming Language</th>
                    <td>
                        <img src={java} alt="java" />
                        <img src={python} alt="python" />
                        </td>
                </tr>
                <tr>
                    <th>Databases</th>
                    <td>
                        <img src={sql} alt="java" />
                        <img src={mongo} alt="python" />
                        </td>
                </tr>
            </table>


        </div>
    )
}
