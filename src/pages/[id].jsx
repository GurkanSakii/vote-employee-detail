import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import EmployeeDetail from "@/components/EmployeeDetail";
import { EMPLOYEE_QUERY } from "@/graphql/queries";
import LoadingScreen from "@/components/LoadingScreen";

const EmployeePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery(EMPLOYEE_QUERY, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error: {error.message}</p>;

  return data && <EmployeeDetail employee={data.user} />;
};
export default EmployeePage;
