import { Fragment } from 'react'
import { classNames } from '@/lib'

const navigation = [
  {
    name: 'Language',
    options: [
      {
        name: 'English',
        current: false,
        className: 'fi-en'
      },
      {
        name: 'Español',
        current: true,
        className: 'fi-ve'
      },
      {
        name: 'Português',
        current: false,
        className: 'fi-pt'
      }
    ]
  }
]

export function Header () {
  const currentOptions = navigation[0].options.find(option => option.current)

  return (
    <header className='text-white'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex flex-1'>
          <div className="flex gap-x-12">
            {navigation.map((item) => (
              <span key={item.name} className="text-sm font-semibold leading-6 text-gray-100">
                {item.name} :
                {/*   get current navigation options */}
                { currentOptions !== null && (
                  <Fragment>
                    <span className={classNames('mx-2 fi rounded', currentOptions?.className)}/>
                    <span key={currentOptions?.name} className="text-sm font-semibold leading-6 text-gray-100">
                    {currentOptions?.name}
                  </span>
                  </Fragment>
                )}
              </span>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
