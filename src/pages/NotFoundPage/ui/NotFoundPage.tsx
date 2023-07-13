import { useTranslation } from 'react-i18next'

const NotFoundPage = () => {
	const { t } = useTranslation('notfound')

	return <div>{t('Main')}</div>
}
export default NotFoundPage
