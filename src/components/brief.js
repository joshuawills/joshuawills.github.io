import '../App.css'

function Brief() {
    return (
        <div id="brief">
            <h1><u>about me</u>:</h1>
            <div id="brief-listings">
                <ul>
                    <li>3rd year software engineering student at UNSW</li>
                    <li>Recipient of co-op scholarship</li>
                    <li>interest in lower-level computing, particularly compiler design</li>
                </ul>
            </div>
            <h1><u>technical skills</u>:</h1>
            <div id="brief-listings">
                <ul>
                    <li>Skilled in C, Java, Python, JS/TS, Bash scripting</li>
                    <li>Experience with both SQL and noSQL databases</li>
                    <li>Windows and UNIX-like operating systems</li>
                    <li>React, ExpressJS</li>
                    <li>Grafana</li>
                    <li>Dev-Ops toolchains: Ansible, Harbor, Gitlab, Rancher</li>
                </ul>
            </div>
            <h1><u>experience</u>:</h1>
            <div id="brief-listings">
                <p id="job">Networks Intern (Optus): Jan '23 - Dec '23</p>
                <ul>
                    <li>Full stack development on internal tooling site</li>
                    <li>Developed monitoring system using Grafana and self-built tools for visualisation</li>
                    <li>The system tracks several thousand incidents at any given time</li>
                </ul>
            </div>
            <h1><u>personal work</u>:</h1>
            <div id="brief-listings">
                <p id="job">XY Compiler (work in progress)</p>
                <ul>
                    <li>Developing compiler for 'xy' language in Java</li>
                    <li><a href="https://github.com/joshuawills/xy_java" target="_blank">code</a></li>
                </ul>
                <p id="job">Calend (work in progress)</p>
                <ul>
                    <li>Simple full-stack application for task management</li>
                    <li><a href="https://github.com/joshuawills/calend" target="_blank">code</a></li>
                </ul>
                <p id="job">FIFA career (work in progress)</p>
                <ul>
                    <li>Command-line application for tracking FIFA careers in Python</li>
                    <li><a href="https://github.com/joshuawills/fifa-career" target="_blank">code</a></li>
                </ul>
            </div>


        </div>
    )
}

export default Brief;