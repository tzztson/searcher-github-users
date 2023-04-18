function About() {
    return (
        <>
            <h1 className='text-6xl mb-4'>Searcher Github Users</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details. This
                project created by
                <strong>
                    <a href='https://github.com/tzztson'> tzztson</a>
                </strong>
                .
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>
            <p className='text-lg text-gray-400'>
                Reviewed  By:
                <a className='text-white' href='https://medium.com/@zhenghu61919'>
                    &nbsp; tzztson
                </a>
            </p>
        </>
    )
}

export default About