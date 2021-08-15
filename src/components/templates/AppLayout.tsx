import React, { ReactNode } from 'react'
import SiteHeader from '../organisms/SiteHeader'
import SiteFooter from '../organisms/SiteFooter'
import MainSection from '../molecules/MainSection'

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <div>
    <SiteHeader />
    <MainSection>
      <div>{children}</div>
    </MainSection>
    <SiteFooter />
  </div>
)

export default AppLayout
