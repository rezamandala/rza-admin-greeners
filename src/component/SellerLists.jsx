import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from 'antd'
import React from 'react'
import peopleData from '../json/peopleData'

const SellerLists = () => {
    return (
        <Flex align='center' justify='space-between' gap='large'>
            <Flex vertical='row' gap='small' className='top-seller'>
                <Flex align='center' justify='space-between'>
                    <Typography.Title level={5} strong className='primary--color'>
                        Top Seller
                    </Typography.Title>
                    <Button type='link' className='gray--color'>
                        View All
                    </Button>
                </Flex>
                <Card>
                    <Flex align='center' justify='space-evenly'>
                        <Avatar.Group maxCount={5} maxPopoverTrigger='click' size='large'
                            maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'progress' }}>
                            {peopleData.map((people) => (
                                <Tooltip title={people.name} placement='top'>
                                    <Avatar src={people.picture} />
                                </Tooltip>
                            ))}
                        </Avatar.Group>

                        <Divider type='vertical' className='divider' />
                        <Flex vertical='row'>
                            <Typography.Text type='secondary' strong>
                                1.200 plant sold
                            </Typography.Text>
                            <Typography.Text type='secondary' strong>
                                10 sellers
                            </Typography.Text>
                        </Flex>
                    </Flex>
                </Card>
            </Flex>

            <Flex vertical='row' gap='small' className='featured-seller'>
                <Flex align='center' justify='space-between'>
                    <Typography.Title level={5} strong className='primary--color'>
                        Featured Seller
                    </Typography.Title>
                    <Button type='link' className='gray--color'>
                        View All
                    </Button>
                </Flex>
                <Card>
                    <Flex align='center' justify='space-evenly'>
                        <Avatar.Group maxCount={5} maxPopoverTrigger='click' size='large'
                            maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'progress' }}>
                            {peopleData.map((people) => (
                                <Tooltip title={people.name} placement='top'>
                                    <Avatar src={people.picture} />
                                </Tooltip>
                            ))}
                        </Avatar.Group>

                        <Divider type='vertical' className='divider' />
                        <Flex vertical='row'>
                            <Typography.Text type='secondary' strong>
                                1.530 plant sold
                            </Typography.Text>
                            <Typography.Text type='secondary' strong>
                                13 sellers
                            </Typography.Text>
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </Flex>
    )
}

export default SellerLists