import React, { useState } from 'react'
import Box from '../Components/Library/Box'
import Input from '../Components/InputStyle'
import Button from '../Components/ButtonStyle'

const DaySale = () => {
    const [moreOptions, setMoreOptions] = useState(false)
    const [staffOptions, setStaffOptions] = useState(false)
    const [InputData, setInputData] = useState({
        openDate: '',
        expense: '',
        sale: '',
        chickenKg: '',
        chickenCost: '',
        firoz: '',
        sanjeeb: '',
        kajerBou: '',
        gasCost:'',
        gasUseDate: '',
        electricity: '',
        kirana: ''
    })
    return (
        <Box
            height= '100vh'
            display = 'flex'
            justifyContent = 'center'
            alignItems = 'center'
            flexDirection = 'column'
        >
            <Box display = 'flex' flexDirection = 'column' justifyContent='center' alignItems = 'center'>
                <Box fontWeight='bold'>Date:</Box>
                <Input
                style={{paddingRight: '1rem', backgroundColor : '#2F4858'}}
                    type='date'
                    variant = 'blackInput'
                    placeholder = 'Expense'
                    // onChange=''
                    // value=''
                />
            </Box>
            <Box>
                <Box
                display = 'flex'
                padding = '0.5rem'
                >
                    <Input
                    variant = 'blackInput'
                    placeholder = 'Expense'
                    // onChange=''
                    // value=''
                    />
                    <Input
                    variant = 'blackInput'
                    placeholder = 'Sale'
                    onChange=''
                    value=''
                    />
                </Box>
                <Box
                display = 'flex'
                padding = '0.5rem'
                >
                    <Input
                    variant = 'blueInput'
                    placeholder = 'Chicken Kg'
                    onChange=''
                    value=''
                    />
                    <Input
                    variant = 'blueInput'
                    placeholder = 'Chicken Price'
                    // onChange=''
                    // value=''
                    />
                </Box>
                {
                    staffOptions?
                    <Box
                    display= 'flex'
                    justifyContent = 'center'
                    onClick={()=> setStaffOptions(!staffOptions)}>Hide Staff Options</Box>
                    :
                    <Box
                    display= 'flex'
                    justifyContent = 'center'
                    onClick={()=> {
                        setStaffOptions(!staffOptions)
                        setMoreOptions(false)
                    }}>Show Staff Options</Box>
                }
                <Box
                display = {staffOptions?'flex': 'none'}
                flexDirection = 'column'
                justifyContent = 'center'
                alignItems = 'center'
                padding = '0.5rem'
                >
                    <Input

                    variant = 'blackInput'
                    placeholder = 'Firoz'
                    onChange=''
                    value=''
                    />
                    <Input
                    variant = 'blackInput'
                    placeholder = 'Sanjeeb'
                    // onChange=''
                    // value=''
                    />
                    <Input
                    variant = 'blackInput'
                    placeholder = 'Bou'
                    // onChange=''
                    // value=''
                    />
                </Box>
            </Box>
            {
               moreOptions?
            <Box
            paddingTop = '1rem'
            cursor = 'auto'
            onClick={()=>setMoreOptions(!moreOptions)}>
                Less
            </Box>
            :
            <Box
            transition= 'width 2s, height 2s, background-color 2s, transform 2s'
            paddingTop = '1rem'
            cursor = 'pointer'
            onClick={()=>{
                setMoreOptions(!moreOptions)
                setStaffOptions(false)
            }}>
                More
            </Box>
            }

            <Box
            display = {moreOptions? 'block': 'none'}

            >
                <Box
                display = 'flex'
                padding = '0.5rem'
                >
                    <Input
                    variant = 'blueInput'
                    placeholder = 'Gas Cost'
                    onChange=''
                    value=''
                    />
                    <Input
                    type='date'
                    style={{paddingRight: '1rem'}}
                    variant = 'blueInput'
                    placeholder = 'Gas Use Date'
                    // onChange=''
                    // value=''
                    />
                </Box>
                <Box
                display = 'flex'
                padding = '0.5rem'
                >
                    <Input
                    variant = 'blueInput'
                    placeholder = 'Electricity'
                    onChange=''
                    value=''
                    />
                    <Input
                    variant = 'blueInput'
                    placeholder = 'Kirana'
                    // onChange=''
                    // value=''
                    />
                </Box>
            </Box>
            <Button
            marginTop= '1rem'
            variant = 'button1'
            onClick = {()=> alert('say hi')}
            >Save</Button>


        </Box>
    )
}




export default DaySale
