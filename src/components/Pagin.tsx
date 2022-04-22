import { Pagination } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import React, { useState } from 'react'
import { flexbox } from '@mui/system'

type User = {
    id: number
    first_name: string
    last_name: string
    email: string
    avatar: string
}

function Pagin() {
    const [users, setUsers] = useState<User[]>([])
    const [pageCount, setPageCount] = useState(1)
    const [isLoaded, setisLoaded] = useState(false)
    const [currentPage, setcurrentPage] = useState(1)



    const handleFetch = (value: any = 1) => {
        var URL = `https://reqres.in/api/users?page=${value}`
        fetch(URL)
            .then(response => response.json())
            .then(body => {
                setUsers([...body.data])
                setPageCount(body.total_pages)


                setisLoaded(true)

            })
            .catch(error => console.error('Error', error))
    }

    const handlePageChange = (event: any, value: React.SetStateAction<number>) => {
        handleFetch(value)
        setcurrentPage(value)
    }
    if (!isLoaded)
        handleFetch()


    return (
        <div
            style={{
                display: 'center',
                padding: 30,
                textAlign: 'center'
            }}
        >

            {isLoaded ? (
                users.map(user => (

                    <Card>
                        <div className ="card">

                        <img alt={user.first_name} src={user.avatar}></img>

                        <div>
                            <CardContent>
                                <b>
                                    {user.first_name} {user.last_name}
                                    <br />
                                    {user.email}
                                </b>
                            </CardContent>
                        </div>
                        </div>
                    </Card>
                ))
            ) : (
                <div></div>
            )}
            
            <br/>
            <br/> 
            <div className='main'
            style ={{
                display: 'center',
                flexDirection: 'column',
                padding: 20
            }

            }>
            <Pagination
                count={pageCount}
                page={currentPage}
                defaultPage={1}
                onChange={handlePageChange}
            />
            </div>
            </div>
        
    )
}

export default Pagin