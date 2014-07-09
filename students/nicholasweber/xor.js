var preferredName = function(firstName, lastName) {
  if (typeof firstName != "string" || typeof lastName != "string") {
    return console.log("Uh, something's wrong, both inputs should be strings (even if blank).");
  }

  else if ((!firstName && !lastName) || (!!firstName && !!lastName)) {
      return false;
  }
  
  else if (!!firstName) {
    return firstName;
  }

  else {
    return lastName;
  }

}

/* How does line 6 work? Here's an example:
"Nicholas" "Weber"
(Left side)
!True && !True
-->
False && False
-->
False
(right)
!True && !True
-->
True
(together)
False OR True
--> True


"" ""
(left)
!False && !False
-->
True && True
-->
True
(right)
False && False
-->
False
(together)
True OR False
--> True


"" "Weber"
(left)
!False && !True
True && False
False

(right)

False && True
False
(together)
False OR False
False

"Nicholas" ""

!True && !False
False && True
False

True && False
False

False && False
False
*/