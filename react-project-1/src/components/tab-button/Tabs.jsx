export default function Tabs({
  children,
  buttonsTab,
  ButtonsContainer = 'menu',
}) {
  return (
    <>
      <ButtonsContainer>{buttonsTab}</ButtonsContainer>
      {children}
    </>
  )
}
