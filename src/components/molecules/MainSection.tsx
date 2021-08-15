import React, { ReactNode } from 'react'

const MainSection: React.FC<MainSectionProps> = ({ children }) => (
  <section id="MainSection" className="container px-5 py-24 mx-auto">
    {children}
  </section>
)

export interface MainSectionProps {
  children?: ReactNode
}

export default React.memo(MainSection)
