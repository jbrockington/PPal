**Department of Computer Science North Carolina A\&T State University**

**Architectural Design Specification**

## **Comp 496: Senior Design II Fall 2020**

**![][image1]**

**Team Name Product Name**

**Alan Turing Grace Hopper**

**John Von Neumann Ada Lovelace Charles Babbage**

# **Revision History**

| Revision | Date | Author(s) | Description |
| :---- | :---- | :---- | :---- |
| 0.1 | 10.01.2015 | GH | document creation |
| 0.2 | 10.05.2015 | AT, GH | complete draft |
| 0.3 | 10.12.2015 | AT, GH | release candidate 1 |
| 1.0 | 10.20.2015 | AT, GH, CB | official release |
| 1.1 | 10.31.2015 | AL | added design review requests |

**Contents**

1. [**Introduction**	**5**](#introduction)

2. [**System Overview**	**6**](#system-overview)

   1. [Layer X Description	6](#layer-x-description)

   2. [Layer Y Description	6](#layer-y-description)

   3. [Layer Z Description	6](#layer-z-description)

3. [**Subsystem Definitions & Data Flow**	**7**](#subsystem-definitions-&-data-flow)

| X Layer Subsystems	8 |  |  |  |
| ----- | :---: | :---: | :---: |
| 4.1 | Subsystem 1 | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 8 |
| 4.2 | Subsystem 2 | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 9 |
| 4.3 | Subsystem 3 | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 9 |
| **Y Layer Subsystems**	**10** |  |  |  |
| 5.1 | Subsystem 1 | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 10 |
| 5.2 | Subsystem 2 | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 11 |
| 5.3 | Subsystem 3 | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 11 |
| **Z Layer Subsystems**	**12** |  |  |  |
| 6.1 | Subsystem 1 | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 12 |
| 6.2 | Subsystem 2 | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 13 |
| 6.3 | Subsystem 3 | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 13 |

**4**

**5**

**6**

# **List of Figures**

1. A simple architectural layer diagram	6

2. A simple data flow diagram	7

3. Example subsystem description diagram	8

4. Example subsystem description diagram	10

5. Example subsystem description diagram	12

# **List of Tables**

2. Subsystem interfaces	9

3. Subsystem interfaces	11

4. Subsystem interfaces	13

1. # **Introduction** {#introduction}

Your introduction should describe your product concept in sufficient detail that the architectural design will be easy to follow. The introduction may include information used in the first sections of your SRS for this purpose. At a minimum, ensure that the product concept, scope and key requirements are described.

2. # **System Overview** {#system-overview}

This section should describe the overall structure of your software system. Think of it as the strategy for how you will build the system. An architectural "layer" is the top-level logical view, or an abstraction, of your design. Layers should be composed of related elements of similar capabilities, and should be highly independent of other layers, but should have very clearly defined interfaces and interactions with other layers. Each layer should be identified individually and should be unique as to its function and purpose within the system. This section should also contain the high-level block diagram of the layers, as shown in the example below, as well as detailed descriptions of the functions of each layer.

Figure 1: A simple architectural layer diagram

1. ## **Layer X Description** {#layer-x-description}

Each layer should be described separately in detail. Descriptions should include the features, functions, critical interfaces and interactions of the layer. The description should clearly define the services that the layer provides. Also include any conventions that your team will use in describing the structure: naming conventions for layers, subsystems, modules, and data flows; interface specifications; how layers and subsystems are defined; etc.

2. ## **Layer Y Description** {#layer-y-description}

Each layer should be described separately in detail. Descriptions should include the features, functions, critical interfaces and interactions of the layer. The description should clearly define the services that the layer provides. Also include any conventions that your team will use in describing the structure: naming conventions for layers, subsystems, modules, and data flows; interface specifications; how layers and subsystems are defined; etc.

3. ## **Layer Z Description** {#layer-z-description}

Each layer should be described separately in detail. Descriptions should include the features, functions, critical interfaces and interactions of the layer. The description should clearly define the services that the layer provides. Also include any conventions that your team will use in describing the structure: naming conventions for layers, subsystems, modules, and data flows; interface specifications; how layers and subsystems are defined; etc.

3. # **Subsystem Definitions & Data Flow** {#subsystem-definitions-&-data-flow}

This section breaks down your layer abstraction to another level of detail. Here you grapically repre- sent the logical subsytems that compose each layer and show the interactions*/*interfaces between those subsystems. A subsystem can be thought of as a programming unit that implements one of the major functions of the layer. It, therefore, has data elements that serve as source*/*sinks for other subsystems. The logical data elements that flow between subsystems need to be explicitly defined at this point, beginning with a data flow-like diagram based on the block diagram.

Figure 2: A simple data flow diagram

4. # **X Layer Subsystems**

In this section, the layer is described in some detail in terms of its specific subsystems. Describe each of the layers and its subsystems in a separate chapter*/*major subsection of this document. The content of each subsystem description should be similar. Include in this section any special considerations and*/*or trade-offs considered for the approach you have chosen.

1. ## **Subsystem 1**

This section should be a general description of a particular subsystem for the given layer. For most subsystems, an extract of the architectural block diagram with data flows is useful. This should consist of the subsystem being described and those subsystems with which it communicates.

Figure 3: Example subsystem description diagram

1. ### **Assumptions**

Any assumptions made in the definition of the subsystem should be listed and described. Pay particular attention to assumptions concerning interfaces and interactions with other layers.

2. ### **Responsibilities**

Each of the responsibilities*/*features*/*functions*/*services of the subsystem as identified in the architec- tural summary must be expanded to more detailed responsibilities. These responsibilities form the basis for the identification of the finer-grained responsibilities of the layer’s internal subsystems. Clearly de- scribe what each subsystem does.

3. ### **Subsystem Interfaces**

Each of the inputs and outputs for the subsystem are defined here. Create a table with an entry for each labelled interface that connects to this subsystem. For each entry, describe any incoming and outgoing

data elements will pass through this interface.

Table 2: Subsystem interfaces

| ID | Description | Inputs | Outputs |
| :---- | :---- | :---- | :---- |
| \#xx | Description of the interface*/*bus | input 1 input 2 | output 1 |
| \#xx | Description of the interface*/*bus | N*/*A | output 1 |

2. ## **Subsystem 2**

Repeat for each subsystem

3. ## **Subsystem 3**

Repeat for each subsystem

5. # **Y Layer Subsystems**

In this section, the layer is described in some detail in terms of its specific subsystems. Describe each of the layers and its subsystems in a separate chapter*/*major subsection of this document. The content of each subsystem description should be similar. Include in this section any special considerations and*/*or trade-offs considered for the approach you have chosen.

1. ## **Subsystem 1**

This section should be a general description of a particular subsystem for the given layer. For most subsystems, an extract of the architectural block diagram with data flows is useful. This should consist of the subsystem being described and those subsystems with which it communicates.

Figure 4: Example subsystem description diagram

1. ### **Assumptions**

Any assumptions made in the definition of the subsystem should be listed and described. Pay particular attention to assumptions concerning interfaces and interactions with other layers.

2. ### **Responsibilities**

Each of the responsibilities*/*features*/*functions*/*services of the subsystem as identified in the architec- tural summary must be expanded to more detailed responsibilities. These responsibilities form the basis for the identification of the finer-grained responsibilities of the layer’s internal subsystems. Clearly de- scribe what each subsystem does.

3. ### **Subsystem Interfaces**

Each of the inputs and outputs for the subsystem are defined here. Create a table with an entry for each labelled interface that connects to this subsystem. For each entry, describe any incoming and outgoing

data elements will pass through this interface.

Table 3: Subsystem interfaces

| ID | Description | Inputs | Outputs |
| :---- | :---- | :---- | :---- |
| \#xx | Description of the interface*/*bus | input 1 input 2 | output 1 |
| \#xx | Description of the interface*/*bus | N*/*A | output 1 |

2. ## **Subsystem 2**

Repeat for each subsystem

3. ## **Subsystem 3**

Repeat for each subsystem

6. # **Z Layer Subsystems**

In this section, the layer is described in some detail in terms of its specific subsystems. Describe each of the layers and its subsystems in a separate chapter*/*major subsection of this document. The content of each subsystem description should be similar. Include in this section any special considerations and*/*or trade-offs considered for the approach you have chosen.

1. ## **Subsystem 1**

This section should be a general description of a particular subsystem for the given layer. For most subsystems, an extract of the architectural block diagram with data flows is useful. This should consist of the subsystem being described and those subsystems with which it communicates.

Figure 5: Example subsystem description diagram

1. ### **Assumptions**

Any assumptions made in the definition of the subsystem should be listed and described. Pay particular attention to assumptions concerning interfaces and interactions with other layers.

2. ### **Responsibilities**

Each of the responsibilities*/*features*/*functions*/*services of the subsystem as identified in the architec- tural summary must be expanded to more detailed responsibilities. These responsibilities form the basis for the identification of the finer-grained responsibilities of the layer’s internal subsystems. Clearly de- scribe what each subsystem does.

3. ### **Subsystem Interfaces**

Each of the inputs and outputs for the subsystem are defined here. Create a table with an entry for each labelled interface that connects to this subsystem. For each entry, describe any incoming and outgoing

data elements will pass through this interface.

Table 4: Subsystem interfaces

| ID | Description | Inputs | Outputs |
| :---- | :---- | :---- | :---- |
| \#xx | Description of the interface*/*bus | input 1 input 2 | output 1 |
| \#xx | Description of the interface*/*bus | N*/*A | output 1 |

2. ## **Subsystem 2**

Repeat for each subsystem

3. ## **Subsystem 3**

Repeat for each subsystem

**References**

[image1]: <data:image/png;base64,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>