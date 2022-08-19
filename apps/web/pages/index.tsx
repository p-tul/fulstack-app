import type { NextPage } from 'next'
import Head from 'next/head'

import { Button, ButtonGroup } from '@chakra-ui/react'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Fullstack App Template</title>
				<meta name='description' content='Fullstack App Template' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>Fullstack App Template</h1>
				<Button colorScheme='teal'>Button</Button>
			</main>

			<footer></footer>
		</div>
	)
}

export default Home
