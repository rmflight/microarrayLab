# Readme

This is a repository for a DNA microarray lab that is part of the University of 
Louisville's "Current Topics in Bioinformatics" class. If you use any information
in this document, please cite this `Github` repo, and me, [Robert M Flight](http://robertmflight.blogspot.com).

# Software Required

In preparation for this lab, you should install:

 * [R](http://r-project.org)
 * [RStudio](http://rstudio.org)

After installation, start-up `RStudio` (or just `R` if that is what you are using),
and run the following commands:

```
source("http://bioconductor.org/biocLite.R")
instPackages <- c("limma", "GEOmetadb", "affy", "GEOquery", "arrayQualityMetrics")
biocLite(instPackages)
```

We are also going to examine the following dataset:

GEO [GSE10797](http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE10797)

You should download the raw data files associated with the dataset from [here](http://www.ncbi.nlm.nih.gov/geosuppl/?acc=GSE10797).