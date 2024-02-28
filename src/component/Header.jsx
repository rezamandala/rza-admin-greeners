import React from 'react'
import { Avatar, Flex, Typography } from 'antd'
import Search from 'antd/es/input/Search'
import { MessageOutlined, NotificationOutlined, UserOutlined, BellOutlined } from '@ant-design/icons'

const CustomHeader = () => {
    return (
        <Flex align='center' justify='space-between'>
            <Typography.Title level={3} type='secondary'>
                Welcome back, User
            </Typography.Title>
            <Flex align='center' gap='3rem'>
                <Search placeholder='Search...' allowClear />
                <Flex align='center' gap='10px'>
                    <MessageOutlined className='header-icon' />
                    <BellOutlined className='header-icon' />
                    <Avatar icon={<UserOutlined />} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CustomHeader