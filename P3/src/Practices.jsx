// Lecture - #10        Interview

const Practices = () => {
    const student = [1,2]; // it is an empty array 
    return (
        <div>
            <h1>INTERVIEW Question</h1>
            {/* |       I want "  No Students Found  " if array is empty there are 3 ways we can do that      |*/}
            {/*  1.   What will be output */}
            <p>{student.length && "No student found"}</p>
                {/* student.length this will be 0 and in JS 0 means false then the "&& operator" won't look at the "No student Found"  */}


            {/*     Three way to O/P - " No Students Found" */}
            {/* 1  - but still not correct */}
            <p>{student.length === 0  && "No students Found"}</p>

            {/* 2   - Optimized */}
            <p>{!student.length  && "No students Found"}</p>


            {/* 3 way */}
            <p>{Boolean(!student.length)  && "No students Found"}</p>
            <p>Number of Students : {student.length}</p>            
        </div>
    )
}

export default Practices;