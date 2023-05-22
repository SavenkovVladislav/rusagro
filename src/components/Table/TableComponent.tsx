import React from 'react'
import {
	Table,
	Tbody,
	Tr,
	Td,
	TableContainer,
	Button,
	Flex,
	Text,
} from '@chakra-ui/react'
import { ReactComponent as ArrowIcon } from '../../icons/ArrowIcon.svg'

import styles from './TableComponent.module.scss'

const TableComponent = () => {
	return (
		<div>
			<TableContainer>
				<Table variant='unstyled' style={{ borderRadius: '5px' }}>
					<Tbody>
						<Tr>
							<Td>
								<Flex flexDir='column' justifyContent='center' gap='4px'>
									<Flex alignItems='center' gap='4px'>
										<Text variant='title3'>ПУЛ 1</Text>
										<Text variant='body'>pl_id: 110001513628</Text>
									</Flex>
									<Flex alignItems='center' gap='4px'>
										<Text variant='title3'>Дата</Text>
										<Text variant='body'>15.04.2022</Text>
									</Flex>
								</Flex>
							</Td>
							<Td>
								<Flex flexDir='column' justifyContent='center' gap='4px'>
									<Flex alignItems='center' gap='4px'>
										<Text variant='title3'>Регион:</Text>
										<Text variant='body'>Регион 1</Text>
									</Flex>
									<Flex alignItems='center' gap='4px'>
										<Text variant='title3'>ПУ:</Text>
										<Text variant='body'>РАИ ПУ Закутчанский</Text>
									</Flex>
								</Flex>
							</Td>
							<Td>
								<Flex flexDir='column' justifyContent='center' gap='4px'>
									<Flex alignItems='center' gap='4px'>
										<Text variant='title3'>Культура:</Text>
										<Text variant='body'>17</Text>
									</Flex>
									<Flex alignItems='center' gap='4px'>
										<Text variant='title3'>Поле:</Text>
										<Text variant='body'>BL-04-01-07-0008</Text>
									</Flex>
								</Flex>
							</Td>
							<Td>
								<Flex flexDir='column' justifyContent='center' gap='4px'>
									<Flex alignItems='center' gap='4px'>
										<Text variant='title3'>ТО:</Text>
										<Text variant='body'>Посев кулис (ГА)</Text>
									</Flex>
									<Flex alignItems='center' gap='4px'>
										<Text variant='title3'>Техника:</Text>
										<Text variant='body'>Опрыскиватель самоходный ОЛС-1,0</Text>
									</Flex>
								</Flex>
							</Td>
							<Td>
								<Flex flexDir='column' justifyContent='center' gap='4px'>
									<Flex alignItems='center' gap='4px'>
										<Text variant='title3'>Статус:</Text>
										<Text variant='body'>Не подтвержден</Text>
									</Flex>
								</Flex>
							</Td>
							<Td>
								<Flex flexDir='column' justifyContent='center' gap='4px'>
									<Flex alignItems='center' gap='4px'>
										<Button
											variant='primary'
											style={{
												display: 'flex',
												gap: '14px',
												alignItems: 'center',
											}}
										>
											Перейти
											<ArrowIcon />
										</Button>
									</Flex>
								</Flex>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default TableComponent
