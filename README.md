# Readme

This is a repository for a DNA microarray lab that is part of the University of 
Louisville's "Current Topics in Bioinformatics" class. If you use any information
in this document, please cite this `Github` repo, and me, [Robert M Flight](http://robertmflight.blogspot.com).

# Software Required

In preparation for this lab, you should install:

 * [R](http://cran-r.project.org)
 * [RStudio](http://rstudio.org)

After installation, start-up `RStudio` (or just `R` if that is what you are using),
and run the following commands:

```
source("http://bioconductor.org/biocLite.R")
instPackages <- c("limma", "GEOmetadb", "affy", "GEOquery")
biocLite(instPackages)
```