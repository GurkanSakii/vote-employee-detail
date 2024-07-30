import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import EmployeeDetail from "@/components/EmployeeDetail";
import { EMPLOYEE_QUERY } from "@/graphql/queries";

export default function EmployeePage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery(EMPLOYEE_QUERY, {
    variables: { id },
    fetchPolicy: 'cache',
    skip: !id,
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data && <EmployeeDetail employee={data.employee} />;
}
