function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-6 bg-gray-800 text-primary-content footer-center'>
      <div>
        <p className="text-lg font-bold">Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
