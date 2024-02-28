import { Card, Flex, Image, Typography } from 'antd'
import React from 'react'
import plant from '../assets/product/plant.png'

const ContentSidebar = () => {
    return (
        <div>
            <Card className='card'>
                <Flex vertical gap='large'>
                    <Typography.Title level={4} strong>
                        Today <br /> 5 orders
                    </Typography.Title>
                    <Typography.Title level={4} strong>
                        This Month <br /> 500 orders
                    </Typography.Title>
                </Flex>
                <Image src={plant} alt='plant' style={{ position: 'absolute', bottom: -50, left: 120, height: '300px', width: 'auto' }} />
            </Card>
        </div>
    )
}

export default ContentSidebar