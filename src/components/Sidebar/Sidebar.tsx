import React from 'react'
import { useState } from 'react'
import {
	Switch,
	FormControl,
	FormLabel,
	Input,
	Radio,
	RadioGroup,
	Stack,
	Button,
	Box,
	Flex,
	Container,
	Text,
	extendTheme,
} from '@chakra-ui/react'

import { ReactComponent as LockIcon } from '../../icons/LockIcon.svg'
import { ReactComponent as ArrowIcon } from '../../icons/ArrowIcon.svg'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
	const [value, setValue] = useState('1')
	const [visibleBar, setVisibleBar] = useState(true)
	return (
		<Box>
			<Flex>
				{visibleBar && (
					<Container
						width='310px'
						borderRadius='10px'
						p='15.5px 24px 18px'
						mr='-10px'
						ml='0'
					>
						{/* Свичи */}
						<Flex flexDir='column' gap='7px' mb='34px'>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' mb='0' variant='body'>
									Траектория движения
								</Text>
								<Switch size='lg' colorScheme='primaryGreen' />
							</FormControl>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' mb='0' variant='body'>
									Тепловая карта
								</Text>
								<Switch size='lg' colorScheme='primaryGreen' />
							</FormControl>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' mb='0' variant='body'>
									Линия склона
								</Text>
								<Switch size='lg' colorScheme='primaryGreen' />
							</FormControl>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' mb='0' variant='body'>
									Категоря склона
								</Text>
								<Input
									placeholder='kX'
									size='xs'
									w='50px'
									_placeholder={{ textAlign: 'center', color: '#040404' }}
									borderColor='#C4C8D0'
									focusBorderColor='#C4C8D0'
								/>
							</FormControl>
						</Flex>
						{/* Выбор маршрута */}
						<Flex flexDir='column' gap='7px' mb='34px' pr='15px'>
							<Text as='h3' variant='title3' marginBottom='9px'>
								Выбор маршрута
							</Text>
							<RadioGroup onChange={setValue} value={value}>
								<Stack style={{ gap: '12px' }}>
									<Flex
										justifyContent='space-between'
										alignItems='center'
										style={{ marginTop: '0px' }}
									>
										<Text as='p' variant='body'>
											Оптимальный маршрут
										</Text>
										<Radio
											value='1'
											borderWidth='1px'
											mt='0'
											colorScheme='primaryGreen'
											color='primaryGreen.500'
										></Radio>
									</Flex>
									<Flex
										justifyContent='space-between'
										alignItems='center'
										style={{ marginTop: '0px' }}
									>
										<Text as='p' variant='body'>
											Продуктивный маршрут
										</Text>
										<Radio
											value='2'
											borderWidth='1px'
											colorScheme='primaryGreen'
											color='#5e992f'
										></Radio>
									</Flex>
									<Flex
										justifyContent='space-between'
										alignItems='center'
										style={{ marginTop: '0px' }}
									>
										<Text as='p' variant='body'>
											Не продуктивный маршрут
										</Text>
										<Radio
											value='3'
											borderWidth='1px'
											mt='0'
											colorScheme='primaryGreen'
											color='#5e992f'
										></Radio>
									</Flex>
								</Stack>
							</RadioGroup>
							<Button disabled={true} variant='disabled' mt='9px'>
								Выбрать вручную
							</Button>
						</Flex>

						{/* Параметры */}
						<Flex flexDir='column' gap='7px' mb='34px'>
							<Text as='h3' variant='title3' marginBottom='9px'>
								Параметры:
							</Text>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' variant='body'>
									Кол-во едениц техники
								</Text>
								<Input
									className={styles.input}
									size='xs'
									w='50px'
									_placeholder={{ textAlign: 'center', color: '#040404' }}
									borderColor='#C4C8D0'
									focusBorderColor='#C4C8D0'
								/>
								<LockIcon className={styles.lockIcon} />
							</FormControl>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' variant='body'>
									Ширина оборудования
								</Text>
								<Input
									className={styles.input}
									size='xs'
									w='50px'
									_placeholder={{ textAlign: 'center', color: '#040404' }}
									borderColor='#C4C8D0'
									focusBorderColor='#C4C8D0'
								/>
								<LockIcon className={styles.lockIcon} />
							</FormControl>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' variant='body'>
									Угол движения
								</Text>
								<Input
									className={styles.input}
									size='xs'
									w='50px'
									_placeholder={{ textAlign: 'center', color: '#040404' }}
									borderColor='#C4C8D0'
									focusBorderColor='#C4C8D0'
								/>
								<LockIcon className={styles.lockIcon} />
							</FormControl>
							<Button disabled={true} variant='disabled' mt='9px'>
								Рассчитать
							</Button>
						</Flex>

						{/* Расчетные значения */}
						<Flex flexDir='column' gap='7px' mb='34px'>
							<Text as='h3' variant='title3' marginBottom='9px'>
								Расчетные значения:
							</Text>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' variant='body'>
									Кол-во гонов
								</Text>
								<Input
									className={styles.input}
									placeholder='kX'
									size='xs'
									w='50px'
									_placeholder={{ textAlign: 'center', color: '#040404' }}
									borderColor='#C4C8D0'
									focusBorderColor='#C4C8D0'
								/>
							</FormControl>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' variant='body'>
									Общая длина гонов
								</Text>
								<Input
									className={styles.input}
									placeholder='kX'
									size='xs'
									w='50px'
									_placeholder={{ textAlign: 'center', color: '#040404' }}
									borderColor='#C4C8D0'
									focusBorderColor='#C4C8D0'
								/>
							</FormControl>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' variant='body'>
									Максимальная длина гона
								</Text>
								<Input
									className={styles.input}
									placeholder='kX'
									size='xs'
									w='50px'
									_placeholder={{ textAlign: 'center', color: '#040404' }}
									borderColor='#C4C8D0'
									focusBorderColor='#C4C8D0'
								/>
							</FormControl>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' variant='body'>
									Расчетное время
								</Text>
								<Input
									className={styles.input}
									placeholder='kX'
									size='xs'
									w='50px'
									_placeholder={{ textAlign: 'center', color: '#040404' }}
									borderColor='#C4C8D0'
									focusBorderColor='#C4C8D0'
								/>
							</FormControl>
							<FormControl
								display='flex'
								alignItems='center'
								justifyContent='space-between'
							>
								<Text as='p' variant='body'>
									Среедняя длина гона
								</Text>
								<Input
									className={styles.input}
									placeholder='kX'
									size='xs'
									w='50px'
									_placeholder={{ textAlign: 'center', color: '#040404' }}
									borderColor='#C4C8D0'
									focusBorderColor='#C4C8D0'
								/>
							</FormControl>
						</Flex>
						<Button style={{ width: '100%' }} variant='primary'>
							Подтвердить
						</Button>
					</Container>
				)}
				<div className={styles.sidebarRight}>
					<button
						className={
							visibleBar === true
								? styles.buttonArrowLeft
								: styles.buttonArrowRight
						}
						onClick={() => {
							setVisibleBar(!visibleBar)
						}}
					>
						<ArrowIcon />
					</button>
				</div>
			</Flex>
		</Box>
	)
}

export default Sidebar
