function preferredName (fNm, lNm) {
  return !!fNm == !!lNm ? false : fNm || lNm;
}