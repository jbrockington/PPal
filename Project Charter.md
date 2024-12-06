**Department of Computer Science North Carolina A\&T State University**

**Project Charter**  
**Comp 496: Senior Design II Fall 2024**

**J.O.S.**   
**Progress Pal**

**Ja’Corey Brockington**  
**Obieze Udemadu**

**Shunwel Reid**

**Revision History**

| Revision | Date | Author(s) | Description |
| :---- | :---- | :---- | :---- |
| 0.1 | 10.15.2024 | OU, SR, JB | document creation |
| 0.2 | 10.22.2024 | OU, SR, JB | complete draft |
| 0.3 | 10.29.2024 | OU, SR, JB | revision for submission |

**Contents**

1. **[Vision](#vision)**	[**6**](#vision)

2. [**Mission**	**6**](#mission)

3. [**Success Criteria**	**6**](#success-criteria)

4. [**Background**	**7**](#background)

5. [**Related Work**	**8**](#related-work)

6. [**System Overview**	**9**](#system-overview)

7. [**Roles & Responsibilities**	**10**](#roles-&-responsibilities)

8. [**Cost Proposal**	**11**](#cost-proposal)

   1. [Preliminary Budget	11](#preliminary-budget)

   2. [Current & Pending Support	11](#current-&-pending-support)

9. [**Facilities & Equipment**	**12**](#facilities-&-equipment)

10. [**Assumptions**	**13**](#assumptions)

11. [**Constraints**	**14**](#constraints)

12. [**Risks**	**15**](#risks)

13. [**Documentation & Reporting**	**16**](#documentation-&-reporting)

    1. [Major Documentation Deliverables	16](#major-documentation-deliverables)

       1. [System Requirements Specification	16](#system-requirements-specification)

       2. [Project Charter	16](#project-charter)

       3. [Architectural Design Specification	16](#architectural-design-specification)

       4. [Detailed Design Specification	16](#detailed-design-specification)

       5. [System Test Plan	16](#system-test-plan)

    2. [Recurring Sprint Items	16](#recurring-sprint-items)

       1. [Product Backlog	16](#product-backlog)

       2. [Sprint Planning	16](#sprint-planning)

       3. [Sprint Goal	16](#sprint-goal)

       4. [Sprint Backlog	16](#sprint-backlog)

       5. [Task Breakdown	16](#task-breakdown)

       6. [Sprint Retrospective	16](#sprint-retrospective)

       7. [Individual Status Reports	17](#individual-status-reports)

    3. [Closeout Materials	17](#closeout-materials)

       1. [System Prototype	17](#system-prototype)

       2. [Project Poster	17](#project-poster)

       3. Web Page	17

       4. [Demo Video	17](#demo-video)

       5. [Source Code	17](#source-code)

       6. [Source Code Documentation	17](#source-code-documentation)

       7. [Installation Scripts	17](#installation-scripts)

       8. User Manual	17

**List of Figures**

1. # **Vision** {#vision}

To revolutionize productivity by creating an intuitive and comprehensive platform that empowers users to optimize their time and tasks. We envision transforming work habits and enhancing personal and professional growth through innovative tools and insights. Our goal is to make productivity not just a necessity, but an enjoyable and fulfilling experience. By leveraging cutting-edge technology, we aim to set new standards in productivity management.

2. # **Mission** {#mission}

To become a trusted companion in the user’s journey towards improved productivity by providing a platform that tracks, analyzes, and optimizes their time and tasks. We are committed to making productivity enjoyable and achievable through continuous user feedback and app analytics. Our mission is to support users in achieving their personal and professional goals by offering tailored solutions and actionable insights. Ultimately, we strive to contribute to the user’s growth and success by making productivity a seamless part of their daily routine.

3. # **Success Criteria** {#success-criteria}

Upon completion of the Progress Pal platform, we expect the following success indicators to be observed:

* A 15% increase in user productivity within the first month

* A 20% reduction in time spent on non-essential tasks

* A 25% increase in user satisfaction based on feedback surveys

Within 6 months after the platform launch, we expect the following success indicators to be observed:

* An additional 10% increase in user productivity

* An additional 15% reduction in time spent on non-essential tasks

* A 30% increase in user engagement with the platform’s features

Within 12 months after the platform launch, we expect the following success indicators to be observed:

* Expansion of the platform to 5 additional markets

* Integration with 3 major productivity tools and platforms

* An additional 20% increase in user productivity

* A 40% increase in overall user satisfaction and retention rates

4. # **Background** {#background}

The modern world is marked by a growing need for effective time management and productivity tools. In today’s fast-paced, digital environment, individuals are often overloaded with tasks and responsibilities, which can lead to stress, inefficiency, and missed deadlines. Despite the availability of various task management apps, many users still struggle to maintain a balance between their personal and professional lives due to inadequate planning, limited self-accountability, and the lack of tools that promote reflective habits. The status quo is largely dominated by generic task lists and calendar apps that organize tasks but fail to address the broader need for strategic planning and in-depth productivity analysis. Many existing tools lack key features that foster true productivity, such as time-tracking mechanisms that offer actionable insights or dashboards that help users reflect on their time management habits over time.

For businesses, the impact of poor time management among employees can lead to reduced productivity and resource wastage, which directly affects performance and profitability. Individuals and organizations alike would benefit from a platform that not only organizes tasks but also encourages a culture of continuous improvement. Users want a tool that allows them to break down tasks, manage priorities, and review time usage to understand how they can optimize their efforts. This demand for improved productivity and accountability is the core "business case" for developing this application. Unlike existing solutions, our platform is designed to foster productive habits by tracking time spent on each task and providing users with insights into their time management patterns. These insights empower users to refine their routines and increase their efficiency, promoting both personal growth and organizational success.

Our application’s customers or sponsors would ideally be individuals, professionals, and organizations that recognize the need for enhanced productivity tools. They are interested in a solution that goes beyond traditional to-do lists, providing value through time-tracking, real-time task monitoring, and progress analysis. By investing in this platform, they aim to improve individual performance, boost accountability, and drive long-term efficiency. This comprehensive approach to time and task management is not available in the current marketplace, making this project essential for individuals and teams aiming to optimize their productivity in a sustainable way.

5. # **Related Work** {#related-work}

The current state of productivity tools includes a variety of commercially available applications, academic research, and enthusiast prototypes, each catering to specific aspects of task management and productivity. However, most existing tools lack the integration of task planning, real-time tracking, and reflective analytics necessary for a holistic productivity solution.

Commercial Solutions: Applications like Todoist and Microsoft To-Do are popular task management tools, with Todoist providing advanced features such as project templates, collaboration, and calendar syncing. However, the free version is limited, requiring a paid subscription to access critical productivity features. Microsoft To-Do, on the other hand, offers a simple and free task list solution, integrated well within the Microsoft ecosystem but lacking customization and time-tracking capabilities, which can limit its functionality for users seeking deeper productivity insights (MakeUseOf, 2024; Android Central, 2023; HelpDesk Geek, 2022).

Project Management Tools: Solutions like Trello and Asana cater to team-based project management, focusing on collaborative workflows and task prioritization. While powerful for teams, these tools can be overly complex for individual productivity needs and do not offer native time-tracking or reflective analytics, reducing their effectiveness for personal use (Android Central, 2023).

Time-Tracking Applications: Tools like RescueTime excel in monitoring digital activity and providing insights into how users spend time online. RescueTime is particularly helpful for understanding screen time, but it lacks detailed task management and does not track specific tasks, which can make it challenging for users aiming to monitor and improve task completion rates through a single platform (HelpDesk Geek, 2022).

Academic Research and Enthusiast Prototypes: Research, such as studies by Cao & Hwang (2020), supports the integration of planning and time-tracking as a means to enhance productivity. However, commercial tools rarely implement this holistic approach. Prototypes in enthusiast communities, like Pomodone, attempt to combine task tracking with time management techniques, but they generally lack the support, scalability, and advanced analytics needed for reliable, everyday use (HelpDesk Geek, 2022; Use Motion, 2023).

The primary limitation of these existing tools is the lack of a comprehensive, integrated system that combines task management, time-tracking, and productivity analytics in a seamless experience. Many are either too complex, like Trello, or lack necessary features, as seen in Microsoft To-Do, making them insufficient for users seeking both a streamlined task management experience and reflective insights into productivity. Therefore, a unified platform that incorporates task planning, real-time tracking, and insightful analytics would better serve users by enabling personal productivity improvements through a single, efficient tool.

6. # **System Overview** {#system-overview}

Our productivity platform offers a unified solution that integrates task management, real-time tracking, and progress analysis to help users develop productive habits and reflect on their routines. At a high level, the system is composed of three main components: the User Interface (UI), Backend Services, and Database. Each component plays a specific role in supporting task planning, time tracking, and reflective analytics, creating a streamlined user experience that addresses the limitations of fragmented productivity tools.

The User Interface (UI) serves as the primary interaction point, where users can plan tasks, track time, and view insights. Users can create, prioritize, and categorize tasks through the UI, adding estimated completion times to visualize their workload. They can also initiate and stop time tracking directly within the UI, with real-time data updates sent to the backend. Additionally, an insights dashboard presents graphical analytics on productivity patterns, including time spent on tasks and completion rates, empowering users to make informed adjustments to their routines.

The Backend Services manage data processing, business logic, and communication between the UI and the Database. This layer supports all task management requests from the UI, ensuring real-time updates and prioritization. It also handles time-tracking data, synchronizing start and stop logs with the UI for accurate progress representation. Furthermore, the backend generates analytical insights by compiling data on completed tasks and time logs, which are transformed into user-friendly reports accessible on the insights dashboard. By centralizing these functions, the backend ensures a consistent and scalable system that adapts to user needs.

Finally, the Database provides long-term storage for user data, including profiles, task records, and time logs. User profiles store preferences and settings, enabling a personalized experience, while task records maintain all details related to task management. Time-tracking data and analytics are stored for later retrieval, allowing users to view historical productivity trends and patterns. The Database maintains data consistency and durability, supporting a comprehensive view of each user’s productivity journey.

For external interactions, the system requires an internet connection and may interface with a web server to facilitate real-time communication between the UI and the backend. User inputs flow seamlessly from the UI to the backend and database, ensuring instant data processing and reflection. This integrated system structure, as illustrated in Figure X, provides a cohesive and data-driven productivity tool that enables users to plan, track, and analyze their daily activities effectively.

7. # **Roles & Responsibilities** {#roles-&-responsibilities}

The ProgressPal project has a range of stakeholders, each with distinct interests and roles. Primary users include individuals focused on productivity enhancement and tech enthusiasts interested in personal data analytics. These users will rely on ProgressPal to track and optimize their daily routines and evaluate productivity trends over time. On the organizational level, the internal development team sponsors the project, providing necessary resources and setting high-level objectives. Secondary stakeholders include management, who oversee project alignment with company goals, and potential partners interested in future integrations, which could expand functionality and user engagement.

Communication between the sponsor and the development team will be managed by the Project Manager, who serves as the primary point of contact, relaying essential project updates and sponsor feedback. The development team is composed of several members with distinct roles. The frontend developer is responsible for implementing the user interface, focusing on user interactions and ensuring that the interface is responsive and accessible. The backend developer maintains the server-side logic using Django, facilitating time tracking, real-time data processing, and the backend components of analytics features. Additionally, the backend developer collaborates closely with the frontend to ensure smooth data exchange and high security standards. The team also includes a data analyst who designs and implements data visualizations for productivity insights, working with both frontend and backend developers to ensure accuracy and clarity in data presentation. Quality Assurance (QA) focuses on testing each feature before launch, ensuring that all components meet functional, performance, and cross-device compatibility standards. Overseeing these roles is the Project Manager, who manages timelines, resource allocation, and high-level objectives, ensuring that the team is on track and communicating effectively with stakeholders.

For the Scrum methodology, the Project Manager will assume the role of Product Owner throughout the project, allowing continuity in understanding the product vision and stakeholder needs. The Scrum Master role, however, will rotate among team members to give each individual experience in sprint management, stand-up coordination, and retrospective facilitation. This rotation not only prevents role fatigue but also fosters a collaborative team dynamic where members gain a holistic understanding of the project and Agile processes. This clear structure of roles and responsibilities will help the team align their efforts toward ProgressPal's goals, ensuring an organized, effective development process while also promoting skill growth across the team.

8. # **Cost Proposal** {#cost-proposal}

The development of ProgressPal does not require additional funding for major expenses, as all resources necessary for the project are available within the development team’s existing infrastructure. Essential tools for frontend, backend, and data analysis development are covered by the team's access to open-source software and existing software licenses. Additionally, since ProgressPal will be developed internally, there will be no external costs associated with software or platform subscriptions, hardware purchases, or third-party services. As such, there is no anticipated cost for ProgressPal’s development.

1. ## **Preliminary Budget** {#preliminary-budget}

The anticipated budget for ProgressPal’s development remains minimal, as all necessary resources are available through the team’s existing infrastructure. Software licenses for tools like Jira, Trello, Figma, or Google Analytics are covered, ensuring access to project management, UI/UX design, and analytics software at no additional cost. Development hardware, including laptops and workstations, is provided internally, and necessary devices for cross-platform testing (smartphones and tablets) are readily accessible within the team. Backend hosting, database storage, and cloud services are also covered under the team's pre-existing provisions, eliminating any need for additional cloud or storage expenses. While a web domain and SSL certificate may be typical costs, these are either already available or included in the team’s setup, thus further reducing budget requirements. Consequently, no additional expenses are expected, allowing ProgressPal to proceed cost-effectively within the team’s existing resources.

2. ## **Current & Pending Support** {#current-&-pending-support}

ProgressPal’s development is fully supported by existing internal resources, with no need for additional funding beyond the initial allocation provided by the Computer Science and Engineering (CSE) department. This departmental funding ensures access to essential software, infrastructure, and development tools, covering all foundational requirements for the project. The team’s current access to software, cloud storage, and hardware further supports project tasks without necessitating any external purchases or subscriptions. Given that the project’s scope aligns with available resources, there are no additional or unsecured funding sources anticipated at this time.

9. # **Facilities & Equipment** {#facilities-&-equipment}

ProgressPal’s development will primarily take place in a collaborative workspace, utilizing lab facilities available within the Computer Science and Engineering (CSE) department. Access to this lab space will support team collaboration, version control, and testing on various devices. The project requires no specialized equipment beyond standard development resources (computers, smartphones, and tablets for compatibility testing), all of which are readily available within the lab. Additionally, since ProgressPal does not involve hardware components or physical prototyping, no makerspace or external testing grounds are necessary. The lab’s existing infrastructure and equipment are sufficient to complete the project without any need for additional purchases, leases, or outsourced resources.

The CSE department lab provides a suitable environment for collaborative development, enabling the team to work efficiently on both frontend and backend components of ProgressPal. This space offers the necessary computing resources, including desktop workstations and network access for real-time testing and version control through platforms like GitHub. The lab’s collaborative setup will allow the team to maintain an agile workflow, making it easy to address any development challenges quickly and ensuring seamless integration between project components. The lab’s devices will also allow for cross-platform testing on various operating systems and screen sizes, ensuring ProgressPal’s compatibility and usability across devices.

Since the project is software-focused, there’s no need for specialized hardware or access to makerspaces that typically cater to physical prototyping. The team will utilize existing equipment in the CSE lab, such as smartphones and tablets, to conduct user interface testing and assess responsiveness across different screen sizes. This setup will enable the team to identify and address any display or functionality inconsistencies across platforms, ensuring a smooth user experience. With these accessible resources, the project can be completed efficiently without the requirement of additional spaces or equipment.

10. # **Assumptions** {#assumptions}

The following list contains critical assumptions related to the implementation and testing of the Progress Pal app:

* The development team will have access to necessary productivity tools and platforms by the 2nd sprint cycle.

* User feedback will be collected and analyzed regularly to inform feature development and improvements.

* Integration with third-party productivity tools and platforms will be completed by the 4th sprint cycle.

* Adequate server and network infrastructure will be available to support the app’s performance and scalability.

* The app will comply with all relevant data privacy and security regulations, protecting user data.

* The marketing team will successfully reach the target audience to drive user adoption and engagement.

* Continuous support and maintenance will be provided to address any issues or bugs that arise post-launch.

11. # **Constraints** {#constraints}

The following list contains key constraints related to the implementation and testing of the Progress Pal app:

* The final version of the prototype must be launched by December 31st, 2024\.

* The development team will have a maximum budget of $50,000 for the entire project.

* The app must comply with all relevant data privacy and security regulations, including GDPR and CCPA.

* The development team will have access to external consultants for no more than 10 hours per week.

* User data must be anonymized and encrypted before being stored or analyzed.

* The app must be compatible with web platforms and mobile platforms from the initial launch.

* All marketing and promotional activities must be approved by the legal team before execution.

12. # **Risks** {#risks}

The following table outlines the five most critical risks for the productivity platform project. Each risk includes an estimated probability of occurrence, potential size of loss in terms of project delay (days), and risk exposure (in days).

| Risk description | Probability | Loss (days) | Exposure (days) |
| :---- | :---- | :---- | :---- |
| Integration Delays between Front-end and Back-end | 0.40 | 15 | 6 |
| Outdoor testing grounds are not available | 0.30 | 12 | 3.6 |
| Internet access not available at installation site | 0.20 | 20 | 4 |
| Delays in shipping from overseas vendors | 0.25 | 10 | 2.5 |
| Certification delays at compliance testing facility | 0.30 | 8 | 2.4 |

Table 1: Overview of highest exposure project risks

13. # **Documentation & Reporting** {#documentation-&-reporting}

    1. ## **Major  Documentation  Deliverables** {#major-documentation-deliverables}

       1. ### **System Requirements Specification** {#system-requirements-specification}

The System Requirements Specification (SRS) document will be maintained and updated as needed throughout the project lifecycle. Updates will occur during major development milestones, user feedback sessions, or when new requirements are identified. The initial version of the SRS will be delivered at the end of the requirements gathering phase, approximately two weeks after project initiation. The final version will be delivered once development is complete and will include any changes made during the development process, expected to be ready one week before the final project submission.

2. ### **Project Charter** {#project-charter}

The Project Charter will be maintained through regular reviews, particularly after each sprint, to ensure that it reflects any changes in project scope, objectives, or stakeholder input. The initial version will be delivered alongside the project kickoff meeting, providing a clear outline of project goals and stakeholder roles. The final version will be completed at the end of the project, incorporating any updates made during the project to document the final objectives and scope.

3. ### **Architectural Design Specification** {#architectural-design-specification}

The Architectural Design Specification (ADS) will be updated at the conclusion of each development phase or when significant architectural changes occur due to evolving project needs or team feedback. The initial version will be delivered following the architectural design phase, approximately four weeks into the project. The final version will be completed just before the project enters the testing phase, ensuring it accurately reflects the system's architecture as developed.

4. ### **Detailed Design Specification** {#detailed-design-specification}

The Detailed Design Specification (DDS) will be maintained and updated throughout the implementation phase, with adjustments made during each sprint to incorporate feedback and new insights. The initial version will be delivered once the detailed design phase concludes, which is expected to be around six weeks into the project. The final version will be delivered at the end of the development phase, providing a comprehensive overview of the system's design prior to testing.

5. ### **System Test Plan** {#system-test-plan}

The System Test Plan will be updated as the project progresses, particularly after significant features are implemented or when issues are identified during testing. The initial version will be delivered once the testing strategy is defined, approximately eight weeks into the project. The final version will be completed before the final testing phase, ensuring that it includes all necessary test cases, procedures, and criteria based on the fully developed system.

2. ## **Recurring Sprint Items** {#recurring-sprint-items}

Items will be added to the product backlog from the System Requirements Specification (SRS) based on identified features, user stories, and feedback gathered from stakeholders. Prioritization will follow the MoSCoW method (Must have, Should have, Could have, Won’t have) to ensure that the most critical items are addressed first. The product owner will make the final decision on prioritization, with input from the team and stakeholders. The product backlog will be maintained and shared using tools like Jira or Trello, which facilitate collaboration and visibility.

1. ### **Product Backlog** {#product-backlog}

Each sprint will be planned during a dedicated sprint planning meeting, where the team will review the product backlog and select items for the upcoming sprint based on priority and team capacity. The project is expected to consist of approximately six sprints, each lasting two weeks.

2. ### **Sprint Planning** {#sprint-planning}

The sprint goal will be determined collaboratively by the product owner and the development team during the sprint planning meeting. The customer will be involved by providing input on priorities and expectations, ensuring that the sprint goals align with their needs.

3. ### **Sprint Goal** {#sprint-goal}

Decisions regarding which product backlog items transition to the sprint backlog will be made collectively during the sprint planning session, with the product owner guiding the discussion. The backlog will be maintained using a collaboration tool, such as a scrum board in Jira or Trello, which will help visualize progress and facilitate communication.

4. ### **Sprint Backlog** {#sprint-backlog}

Decisions regarding which product backlog items transition to the sprint backlog will be made collectively during the sprint planning session, with the product owner guiding the discussion. The backlog will be maintained using a collaboration tool, such as a scrum board in Jira or Trello, which will help visualize progress and facilitate communication.

5. ### **Task Breakdown** {#task-breakdown}

Individual tasks will be assigned from the sprint backlog based on team members' strengths and interests, allowing them to voluntarily claim tasks. The product owner will also play a role in task assignment when necessary. Time spent on tasks will be documented using time-tracking tools integrated with the collaboration software.

6. ### **Sprint Retrospective** {#sprint-retrospective}

The sprint retrospective will be handled as a group discussion immediately following the sprint review. This discussion will occur within the first day after each sprint's conclusion. Documentation will include collective reflections on what went well, what could be improved, and action items for the next sprint, with individual contributions due within two days of the retrospective.

7. ### **Individual Status Reports** {#individual-status-reports}

Each individual team member will provide a status report on a weekly basis. The report will include key items such as progress made on assigned tasks, any obstacles encountered, time spent on activities, and upcoming goals for the following week. This regular reporting will ensure accountability and facilitate team communication.

3. ## **Closeout Materials** {#closeout-materials}

   1. ### **System Prototype** {#system-prototype}

The final system prototype will include all implemented features of the ProgressPal application, demonstrating functionalities such as task planning, real-time tracking, self-reflection prompts, and analytics. This prototype will be demonstrated during a scheduled presentation at the end of the project, showcasing how the application meets user requirements.

2. ### **Project Poster** {#project-poster}

The project poster will include an overview of the ProgressPal project, highlighting the objectives, methodologies, key features, and user benefits. The final dimensions will be determined based on the presentation requirements, and the poster will be delivered one week prior to the project closeout for review and feedback.

3. **WEB PAGE**

The project web page will feature an overview of the ProgressPal application, including its key functionalities, user testimonials, and links to the demo video and project repository. This web page will be accessible to the public and delivered at project closeout, with plans for updates throughout the project to reflect progress and new features.

4. ### **Demo Video** {#demo-video}

The demo video will showcase the core functionalities of the ProgressPal application, including a walk-through of the user interface and explanations of key features such as task planning and analytics. A B-roll footage will be included for potential future video cuts. The video is expected to be approximately 5–7 minutes long, covering the project goals, development process, and user benefits.

5. ### **Source Code** {#source-code}

The source code will be maintained using Git as the version control system. All source code will be provided to the customer along with compiled binaries, ensuring they have access to the complete project. The source code handover will occur at project closeout, and the project will be open-sourced under the MIT license, with license terms included in a README file and each source file.

6. ### **Source Code Documentation** {#source-code-documentation}

Documentation standards will follow industry best practices, utilizing tools like Doxygen for generating documentation. The final documentation will be provided in browsable HTML format, allowing for easy access and navigation.

7. ### **Installation Scripts** {#installation-scripts}

To facilitate the deployment of the software to new installations, installation scripts will be provided to streamline the setup process. These scripts will be designed to work for both the graphical front end and the backend server software, ensuring a smooth installation experience for users.

8. **USER MANUAL**

A digital user manual will be provided to the customer, outlining how to use the ProgressPal application effectively. Additionally, a setup video will be created to guide users through the installation and initial configuration process, ensuring they have the necessary resources to get started.

# **References**

"Todoist vs Microsoft To-Do: Comparison & Breakdown," ToolFinder, 2024\. Available at [ToolFinder.co​m](https://toolfinder.co).

"Microsoft To-Do vs. Todoist: Which Is Better for Tracking Your Daily Tasks?" MakeUseOf, 2024\. Available at [MakeUseOf](https://www.makeuseof.com)​ .

"Todoist vs. Microsoft To Do: Which One is Right for You," HelpDesk Geek, 2022\. Available at [HelpDeskGeek](https://helpdeskgeek.com)​ .

"Todoist vs Microsoft To Do: Which is better for your productivity workflow?" Android Central, 2023\. Available at [Android Central](https://www.androidcentral.com)​ .

Rodríguez, J. et al., "A Comparative Study of Collaborative Task Management Tools," Motion, 2023\. Available at [Use Motion](https://www.usemotion.com)​.  
