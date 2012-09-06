# Microarray Lab

Current arrays used (including Affymetrix(r) and Agilent(r)) tend to have no 
problems with finding and calculating spot intensities. Therefore, this lab will 
concentrate on exploring data from public databases and performing a basic analysis
using open-source tools such as [`Bioconductor`](http://bioconductor.org).

## Exploration

### Data Sources

Currently DNA microarray data is deposited in 
 * [GEO](http://www.ncbi.nlm.nih.gov/geo/) 
 * [ArrayExpress](http://www.ebi.ac.uk/arrayexpress/)
 
These both provide a rich source of raw data for analysis. You should spend some time looking at the websites. 

Can we answer some basic questions about the number of data sets in each?

#### GEO

* How many platforms?
* How many experiments (series)?
* How many samples?
* How many curated datasets?
* How many organisms represented?

How hard is this information to get via the web-site?

### Bioconductor

[`Bioconductor`](http://bioconductor.org) is a set of `R` libraries specifically
developed for high-throughput biological analysis
 * Originally geared towards DNA microarray
 * Now moving more into other -omics and RNASeq
 
help