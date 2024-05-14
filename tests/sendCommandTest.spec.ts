import test, { expect } from '@playwright/test'

async function sendCommand(page, method) {
	await page.goto('http://localhost:5173/')
	const input = page.getByPlaceholder('Type command')
	await expect(input).toBeVisible()
	await input.fill('projects')

	switch (method) {
		case 'keyboard':
			await input.press('Enter')
			break
		case 'mouse':
			const submitCommandButton = page.getByRole('button').nth(2)
			await expect(submitCommandButton).toBeVisible()
			await submitCommandButton.click()
			break
	}

	await expect(page.getByText('projects', { exact: true })).toBeVisible()
}

test('Send command by keyboard test', async ({ page }) => {
	await sendCommand(page, 'keyboard')
})

test('Send command by mouse test', async ({ page }) => {
	await sendCommand(page, 'mouse')
})
