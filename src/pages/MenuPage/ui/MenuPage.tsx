import { useTranslation } from 'react-i18next'

const MenuPage = () => {
	const { t } = useTranslation('menu')

	return <div>{t('Main')}</div>
}
export default MenuPage
