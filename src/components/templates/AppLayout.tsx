import React, { ReactNode } from 'react'
import SiteHeader from '../organisms/SiteHeader'
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
  </div>
)

export default AppLayout
